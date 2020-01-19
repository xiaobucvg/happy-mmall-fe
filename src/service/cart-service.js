const _mm = require('Util/mm.js');


const cart = {
    // 获取购物车商品数量
    getCartProductCount(resolve, reject) {
        _mm.request({
            url: 'http://localhost:8088/api/cart/get_cart_product_count.do',
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    // 加入购物车
    addCart(productInfo, resolve, reject) {
        _mm.request({
            url: 'http://localhost:8088/api/cart/add.do',
            method: 'POST',
            data: productInfo,
            success: resolve,
            error: reject
        });
    },
};
module.exports = cart;