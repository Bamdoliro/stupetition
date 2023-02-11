import ProfileSvg from 'assets/profile.svg';
import * as S from './style';

const Comment = () => {
  return (
    <S.Container>
      <S.Info>
        <S.InfoWrap>
          <S.ProfileWrap>
            <S.Profile src={ProfileSvg} />
            <S.ItemWrap>
              <S.Name>신준서</S.Name>
              <S.Date>2022-03-02 13:05</S.Date>
            </S.ItemWrap>
          </S.ProfileWrap>
          <S.Delete>삭제</S.Delete>
        </S.InfoWrap>
      </S.Info>
      <S.Comment>
        저도 그렇게 생각합니다. 김석진 이 색기는 그냥 자퇴해도 모자랄 판이에요.
        이색기 또 자신감만 졸라게 넘쳐가지곤 그냥 지가 짱인줄 앎.
      </S.Comment>
    </S.Container>
  );
};

export default Comment;
