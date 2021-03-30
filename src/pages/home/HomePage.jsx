import React from 'react';
import { Header, Footer, Carousel, SideMenu, ProductCollection } from '../../components';
import { Row, Col, Typography } from 'antd';
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from '../../assets/images/sider_2019_12-09.png';
// import sideImage2 from '../../assets/images/sider_2019_02-04.png';
// import sideImage3 from '../..assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css';

export class HomePage extends React.Component {
    render() {
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
                title={<Typography.Title level={3} type="wraning">爆款推荐</Typography.Title>}
                sideImage={sideImage}
                products={productList1}
                />
            </div>
            <Footer/>
        </>
    }
}