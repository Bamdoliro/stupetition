import { useMutation } from 'react-query';
import { joinUser } from 'apis/auth.api';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { JoinType } from 'types/auth.type';

interface JoinFeatureType {
  setJoinData: Dispatch<SetStateAction<JoinType>>;
  joinData: JoinType;
}

export const JoinFeature = ({ setJoinData, joinData }: JoinFeatureType) => {
  const navigate = useNavigate();

  const { mutate } = useMutation(joinUser, {
    onSuccess: () => {
      alert('회원가입 성공 !!');
      navigate('/login');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const join = () => {
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

  return { join };
};
