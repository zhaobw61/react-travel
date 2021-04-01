import React from 'react';
import { Header, Footer, Carousel, SideMenu, ProductCollection } from '../../components';
import { Row, Col, Typography } from 'antd';
import { productList1, productList2, productList3 } from "./mockups";
import sideImage1 from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css';
import { withTranslation } from 'react-i18next';

class HomePageComponent extends React.Component {
    render() {
        const { t } = this.props;
        return <>
            <Header/>
            <div className={styles['page-content']}>
                <Row style={{marginTop: 20}}>
                <Col span={6}>
                    <div><SideMenu /></div>
                </Col>
                <Col span={18}>
                    <div><Carousel /></div>
                </Col>
                </Row>
                <ProductCollection
                title={
                    <Typography.Title level={3} type="wraning">
                        {t("home_page.hot_recommended")}
                    </Typography.Title>
                }
                sideImage={sideImage1}
                products={productList1}
                />
                <ProductCollection
                title={
                    <Typography.Title level={3} type="wraning">
                        {t("home_page.new_arrival")}
                    </Typography.Title>
                }
                sideImage={sideImage2}
                products={productList2}
                />
                <ProductCollection
                title={
                    <Typography.Title level={3} type="wraning">
                        {t("home_page.domestic_travel")}
                    </Typography.Title>
                }
                sideImage={sideImage3}
                products={productList3}
                />
            </div>
            <Footer/>
        </>
    }
}

export const  HomePage = withTranslation()(HomePageComponent);