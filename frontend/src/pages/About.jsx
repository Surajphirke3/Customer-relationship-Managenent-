import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Nextus ERP CRM'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://github.com/surajphirke">github.com/surajphirke</a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/surajphirke/erp-crm">
              https://github.com/surajphirke/erp-crm
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://github.com/surajphirke/erp-crm`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
