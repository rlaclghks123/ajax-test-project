import User from '../model/User.js';

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
