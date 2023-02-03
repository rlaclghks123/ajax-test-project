import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Notification from './Notificaltion.js';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
`;

const MapBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  form {
    &:first-child {
      display: flex;
      justify-content: center;
    }
  }
`;

const Map = styled.div`
  width: 500px;
  height: 400px;
  background-color: tomato;
`;

const { kakao } = window;

function KakaoMap() {
  const [inputText, setInputText] = useState('');
  const [place, setPlace] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText('');
  };

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.querySelector('#map');
    const options = {
      center: new kakao.maps.LatLng(35.5461188, 129.2956365),
      level: 5,
    };
    // 지도 객체 생성
    const map = new kakao.maps.Map(container, options);

    var ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(place, placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>'
        );
        infowindow.open(map, marker);
      });
    }
  }, [place]);

  return (
    <Wrapper>
      <Notification />
      <MapBox>
        <form className="inputForm" onSubmit={handleSubmit}>
          <input placeholder="장소를 검색해주세요" onChange={onChange} value={inputText} />
          <button type="submit">검색</button>
        </form>
        <Map id="map" serchPlace={place}></Map>
      </MapBox>
    </Wrapper>
  );
}

export default KakaoMap;
