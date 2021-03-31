import React from 'react'
import { Image, Typography } from "antd";
import { withRouter, Link } from "react-router-dom";

const ProductImageComponent = ({id, size, imageSrc, price, title, history, location, match}) => {
    return (
        <Link to={`detail/${id}`}>
        {size === "large" ? (
          <Image src={imageSrc} height={285} width={490} />
        ) : (
          <Image src={imageSrc} height={120} width={240} />
        )}
        <div>
          <Typography.Text type="secondary">
            {title.slice(0, 25)}
          </Typography.Text>
          <Typography.Text type="danger" strong>
            ¥ {price} 起
          </Typography.Text>
        </div>
      </Link>
    )
}

export const ProductImage = withRouter(ProductImageComponent);