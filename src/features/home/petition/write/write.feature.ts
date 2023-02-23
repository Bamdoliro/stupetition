import { writePetition } from 'apis/petition.api';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { WritePetitionType } from 'types/petition/petition.type';

export const WriteFeature = (petitionData: WritePetitionType) => {
  const navigate = useNavigate();
  const { mutate } = useMutation(writePetition, {
    onSuccess: () => {
      alert('게시글 작성 성공 !!');
      navigate('/');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const write = () => {
    mutate(petitionData);
  };

  const cancel = () => {
    // 임시 confirm
    if (petitionData.content || petitionData.title) {
      if (
        window.confirm('변경된 사항은 저장되지 않습니다 진짜 나갈거냐 닝겐')
      ) {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  };

  return { write, cancel };
};
