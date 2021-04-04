import React from 'react';
import { Header, Footer, Carousel, SideMenu, ProductCollection } from '../../components';
import { Row, Col, Typography, Spin } from 'antd';
import sideImage1 from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css';
import { withTranslation } from 'react-i18next';
import axios from "axios";
const url = 'https://www.fastmock.site/mock/e963930ddeaaf6c6c496ba531f4a2148'

class HomePageComponent extends React.Component {
    constructor  (props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            productList: []
        }
    }
    async componentDidMount() {
        const { data } = await axios.get(`${url}/api/productCollections`);
        this.setState({
            loading: false,
            error: null,
            productList: data
        });
    }
    render() {
        const { t } = this.props;
        const { productList, loading, error } = this.state;
        if (loading) {
            return (
                <Spin
                    size="large"
                    style={{
                        marginTop: 200,
                        marginBottom: 200,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%",
                    }}
                />
            );
        }
        if (error) {
            return <div>网站出错：{error}</div>;
        }
        return <>
            <Header />
            <div className={styles['page-content']}>
                <Row style={{ marginTop: 20 }}>
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
                    products={productList[0]}
                />
                <ProductCollection
                    title={
                        <Typography.Title level={3} type="wraning">
                            {t("home_page.new_arrival")}
                        </Typography.Title>
                    }
                    sideImage={sideImage2}
                    products={productList[1]}
                />
                <ProductCollection
                    title={
                        <Typography.Title level={3} type="wraning">
                            {t("home_page.domestic_travel")}
                        </Typography.Title>
                    }
                    sideImage={sideImage3}
                    products={productList[2]}
                />
            </div>
            <Footer />
        </>
    }
}

export const  HomePage = withTranslation()(HomePageComponent);