const { override, useBabelRc, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Xác định tệp môi trường dựa trên NODE_ENV
const currentEnv = process.env.NODE_ENV || 'development';
const envPath = path.resolve(__dirname, `.env.${currentEnv}`);

// Kiểm tra nếu tệp môi trường tồn tại, nếu không, sử dụng tệp .env mặc định
const envFileExists = fs.existsSync(envPath);
const envFile = envFileExists ? envPath : path.resolve(__dirname, '.env');

// Lấy các biến môi trường từ tệp tương ứng
const env = dotenv.config({ path: envFile }).parsed;

// Chuyển đổi các biến môi trường thành các định dạng mà Webpack có thể hiểu
const envKeys = env
    ? Object.keys(env).reduce((prev, next) => {
          prev[`process.env.${next}`] = JSON.stringify(env[next]);
          return prev;
      }, {})
    : {};

module.exports = override(
    // Sử dụng Babel config tùy chỉnh nếu cần
    useBabelRc(),

    // Thêm plugin để thiết lập các biến môi trường
    addWebpackPlugin(new webpack.DefinePlugin(envKeys)),
);
