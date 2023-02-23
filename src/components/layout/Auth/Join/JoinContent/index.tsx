import { useNavigate } from 'react-router-dom';
import { JoinContentsPropsType } from 'types/auth/auth.type';
import { useMutation } from 'react-query';
import { joinUser } from 'apis/auth.api';
import Input from 'components/shared/Input';
import SearchInput from 'components/shared/SearchInput';
import Button from 'components/shared/Button';
import { color } from 'styles/theme.style';
import * as T from 'styles/text.style';
import * as S from './style';

const JoinContent = ({
  setSearchSchoolOpen,
  setJoinData,
  joinData,
}: JoinContentsPropsType) => {
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJoinData({ ...joinData, [name]: value });
  };

  const { mutate } = useMutation(joinUser, {
    onSuccess: () => {
      alert('회원가입 성공 !!');
      navigate('/login');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const submit = () => {
    const { password, rePassword, schoolId } = joinData;
    if (password === rePassword) {
      if (schoolId !== 0) {
        mutate(joinData);
      } else {
        alert('학교 선택을 해주세요');
      }
    } else {
      alert('비밀번호가 맞지 않습니다');
    }
    setJoinData({
      email: '',
      password: '',
      rePassword: '',
      schoolId: 0,
      schoolName: '',
    });
  };

  return (
    <S.JoinContent>
      <S.Wrap>
        <S.Title>회원가입</S.Title>
        <S.InputWrap>
          <Input
            desc="학교 이메일 주소"
            placeholder="학교 이메일 주소를 입력해주세요"
            type="email"
            name="email"
            value={joinData.email}
            onChange={onChange}
          />
          <Input
            desc="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            name="password"
            value={joinData.password}
            onChange={onChange}
          />
          <Input
            desc="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
            name="rePassword"
            value={joinData.rePassword}
            onChange={onChange}
          />
          <SearchInput
            width="100%"
            desc="학교"
            placeholder="학교를 입력해주세요"
            type="text"
            name="schoolId"
            value={joinData.schoolName}
            onFocus={() => setSearchSchoolOpen(false)}
          />
        </S.InputWrap>
        <Button
          onClick={submit}
          option="FILLED"
          padding="12px 22px"
          width="180px"
          value="회원가입"
        />
      </S.Wrap>
    </S.JoinContent>
  );
};

export default JoinContent;