import User from '../model/User.js';
import bcrypt from 'bcrypt';

export const postJoin = async (req, res) => {
  const { nickName, username, email, password, password2 } = req.body;
  if (password !== password2) {
    return res.status(400).json({ error: 'password was not working' });
  }

  const exist = await User.exists({ $or: [{ username }, { email }] });
  if (exist) {
    return res.status(409).json({ error: 'username or email was existed' });
  }

  try {
    await User.create({
      nickName,
      username,
      email,
      password,
    });
    return res.status(200).json({ message: '회원가입을 축하합니다' });
  } catch (error) {
    console.log(error);
  }
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, socialOnly: false });

  if (!user) {
    return res.status(400).json({ error: 'Username was not exists' });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).json({ error: 'Password was not correct' });
  }
  req.session.loggedIn = true;
  req.session.user = user;

  return res.status(200).json({
    message: '로그인 되었습니다.',
    loggedIn: req.session.loggedIn,
    sessionId: req.session.user._id,
    count: req.session.user.count,
  });
};

export const getLogout = (req, res) => {
  req.session.destroy();
  return res.status(200).json({ message: '로그아웃 되었습니다' });
};

export const getPurchase = async (req, res) => {
  const { id } = req.params;
  const { count } = await User.findById(id);

  return res.status(200).json({ count });
};

export const postPurchase = async (req, res) => {
  const { id, status } = req.body;

  const user = await User.findById(id);

  if (status) {
    user.count += 1;
    await user.save();
    return res.status(200).json({ message: '결제가 완료되었습니다.' });
  } else {
    return res.status(400).json({ error: '결제에 실패했습니다.' });
  }
};
