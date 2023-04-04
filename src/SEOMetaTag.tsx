import React from 'react';
import Logo from 'assets/logo.svg';
import { Helmet } from 'react-helmet-async';

interface PropsType {
  title?: string;
  keyword?: string;
  description?: string;
  imgSrc?: string;
  url?: string;
}

const SEOMetaTag = ({
  title = '학생청원',
  description = '학생청원, 학생들의 목소리를 듣다',
  url = 'https://petition.bamdoliro.com/',
  keyword = '학생청원, 청원, 학청, 학생 건의, 학생 건의함, 부산소프트웨어마이스터고등학교, 부산소프트웨어마이스터고, 부산소마고, 부소마',
  imgSrc = Logo,
}: PropsType) => {
  return (
    <Helmet>
      <>
        <title>{title}</title>

        <meta name="title" content={title} />
        <meta name="keywords" content={keyword} />
        <meta name="description" content={description} />

        <meta name="og:description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:site_name" content={title} />
        <meta name="og:url" content={url} />
        <meta name="og:image" content={imgSrc} />
        <meta name="og:type" content="website" />

        <link rel="canonical" href={url} />
      </>
    </Helmet>
  );
};

export default SEOMetaTag;
