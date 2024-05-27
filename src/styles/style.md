# 반응형 레이아웃 명세
본 서비스는 모바일 환경에서 구동되는것이 목표이므로, 다양한 가로폭을 가진 모바일 기기에 대응하여 고정형 크기인 `px`가 아닌, 구동되는 기기의 가로폭<sub>viewport width</sub>에 따라 값이 변하는 `vw`를 사용할 예정입니다.  
  
그러므로, CSS 설정시에 해당 조건을 지키는지에 대해서 생각 해봐야 합니다.  
  
다음은 적절한 크기 설정에 대한 예시입니다.  
  
## 1. 제목, 본문 등 텍스트
`theme.js`에 명시된 `fontSize`를 사용합니다. 사용 예시는 다음과 같습니다.  
``` js
const TextWrapper = styled.div`
    font-size: ${({theme}) => theme.fontSize.large};
`
const Text = () => {
    return (
        <TextWrapper>
            Hello, Walkak!
        </TextWrapper>
    )
}
```
만약 명시된 `fontSize` 외에 다른 사이즈를 사용하고 싶다면 **2. 사용자 지정 크기 설정**을 참고하세요.  
  
## 2. 사용자 지정 크기 설정
명시에서 설명했듯, `vw`를 사용해야 합니다. 현재 서비스는 모바일 웹 기반으로 설계되어 있으므로, 최대 가로폭은 `500px`로 가정했습니다.  
  
그러므로, 기기의 가로폭이 `500px`를 넘더라도, 내부 글자와 컴포넌트의 크기는 특정 크기에서 커지면 안됩니다.  
  
그러므로, css의 `min()`을 사용해서 크기의 최대 한도를 지정해줍니다. 사용 예시는 다음과 같습니다.

``` js
const ImageWrapper = styled.img`
    height: min(7vw, 35px);
    width: min(7vw, 35px);
`
const Image = () => {
    return (
        <ImageWrapper src="../assets/image.png" />
    )
}
```

현재 가정한 기기의 최대 가로폭이 `500px`이므로, `1vw`가 커질수 있는 최대값은 `5px`입니다.  
  
만약 이미지의 크기를 `10vw`로 설정해야 한다면, 10의 5배인 `50px`가 최대값. `min(10vw, 50px)` 으로 설정하면 됩니다.
