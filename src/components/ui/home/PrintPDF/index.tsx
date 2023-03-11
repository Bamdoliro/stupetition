import MiniButton from 'components/common/MiniButton';
import { generateListState } from 'atoms/generateList.atom';
import { useRecoilValue } from 'recoil';
import PrintList from './PrintList';
import * as S from './style';

const PrintPDF = () => {
  const generateListData = useRecoilValue(generateListState);

  return (
    <S.PrintPDFLayout>
      <S.PrintPDFWrap>
        <S.TextBox>
          <S.Title>인쇄용 pdf 다운로드</S.Title>
          <S.Desc>아래 pdf를 인쇄하여 학생들에게 나눠주세요.</S.Desc>
        </S.TextBox>
        <S.ButtonBox>
          <MiniButton
            onClick={() => window.print()}
            option="FILLED"
            value="다운로드"
          />
        </S.ButtonBox>
        <S.PrintListWrap>
          <S.PrintListBox>
            {generateListData.map((item) => (
              <PrintList
                key={item.username}
                username={item.username}
                password={item.password}
              />
            ))}
          </S.PrintListBox>
        </S.PrintListWrap>
      </S.PrintPDFWrap>
    </S.PrintPDFLayout>
  );
};

export default PrintPDF;
