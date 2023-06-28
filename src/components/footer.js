function Footer() {
  const copyrightarea = () => {
    return (
      <div className="bg-secondary">
        <div className="max-w-screen-xl mx-auto p-4 text-xs text-copyrighttext font-semibold">
          Copyright © 2023 Hong Kong Tsz Kwong Bethel Church
          香港伯特利教會慈光堂
        </div>
      </div>
    );
  };

  const contactarea = () => {
    return (
      <div className="bg-primary">
        <div className="max-w-screen-xl mx-auto p-4 text-xs text-secondary font-semibold flex flex-col gap-y-2">
          <span>地址 | 香港九龍新蒲崗大有街3號萬廸廣場11樓J室</span>
          <span>電郵 | office@tkbc.org.hk</span>
          <div>
            <span className="mr-4">電話 | (852) 2383-9103 </span>
            <span>傳真 | (852) 2383-0049</span>
          </div>

          <span>
            教會奉獻戶口 | 匯豐銀行 014-424-725-001 (Hong Kong Tsz Kwong Bethel
            Church Limited)
          </span>
        </div>
      </div>
    );
  };
  return (
    <footer>
      {copyrightarea()}
      {contactarea()}
    </footer>
  );
}

export default Footer;
