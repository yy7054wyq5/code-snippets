<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>短尾鼠 | 环保生活从这里开始</title>
  <style>
    body,
    ul,
    li {
      padding: 0;
      margin: 0;
    }

    ul,
    li {
      list-style: none;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    body.pc-body {
      background: url('images/pc/bg.png') no-repeat top center;
    }

    body.mobile-body {
      background: url('images/mobile/bg.png') no-repeat top center;
    }

    .pc .wrap{
      background: url('images/pc/1.png') no-repeat top center;
    }

    .pc-hack-bottom{
      background: #fff;
    }

    .pc .content {
      background-size: cover;
      width: 1100px;
      height: 660px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .pc .content .hack {
      width: 600px;
      height: 100%;
      display: inline-block;
    }

    .pc .content .version {
      font-size: 22px;
      color: #a5a9a8;
      position: absolute;
      bottom: 20px;
      left: 170px;
      width: 340px;
    }

    .pc .content .version span {
      display: block;
      text-align: center;
    }

    .pc .content .down-load {
      width: 320px;
      height: 560px;
      padding-top: 100px;
      display: inline-block;
      margin-left: -4px;
    }

    .pc .content .down-load .icon {
      background: url('images/pc/icon.png') no-repeat;
      width: 342px;
      height: 90px;
    }

    .pc .content .down-load .down {
      position: relative;
      z-index: 1;
      padding-top: 60px;
      margin-left: -20px;
    }

    .pc .content .down-load .down a {
      display: block;
      width: 214px;
      height: 60px;
    }

    .pc .content .down-load .down a.ios {
      background: url('images/pc/pc_ios.png') no-repeat;
    }

    .pc .content .down-load .down a.android {
      margin-top: 32px;
      background: url('images/pc/pc_android.png') no-repeat;
    }

    .pc .content .down-load .down div.QRcode {
      width: 138px;
      position: absolute;
      right: -50px;
      bottom: -8px;
    }

    .pc .content .down-load .down div.QRcode>div {
      text-align: center;
    }

    .mobile {
      position: relative;
    }

    .mobile .shadow {
      position: fixed;
      width: 10rem;
      height: 50rem;
      background: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
    }

    .mobile_hack {
      height: 1.5rem;
    }

    .mobile img {
      display: block;
      width: 9.8rem;
      margin: 0 auto;
    }

    .mobile .content {
      background: #fff;
      margin-top: -1px;
      font-size: 0.6rem;
      color: #a5a9a8;
      height: 5.6rem;
    }

    .mobile .content a {
      display: block;
      width: 3.6rem;
      height: 1rem;
      margin: 0 auto;
    }

    .mobile .content a.mobile-android {
      background: url('images/mobile/wei_android.png') no-repeat;
      background-size: 3.6rem 1rem;
    }

    .mobile .content a.mobile-ios {
      background: url('images/mobile/wei_ios.png') no-repeat;
      background-size: 3.6rem 1rem;
    }

    .mobile .content div span {
      display: block;
      text-align: center;
      font-size: 0.4rem;
    }
  </style>
</head>

<body>
  <!--PC-->
  <div class="pc" style="display: none;">
    <div class="pc-hack-top"></div>
    <div class="wrap">
      <div class="content">
        <div class="hack"></div>
        <div class="down-load">
          <div class="icon"></div>
          <div class="down">
            <a class="ios" href="itms-services://?action=download-manifest&url=https://crowc.oss-cn-shanghai.aliyuncs.com/dws/app/dwx_ios.plist"
              target="_blank"></a>
            <a class="android" href="http://crowc.oss-cn-shanghai.aliyuncs.com/dws/app/dwx_android.apk" target="_blank"></a>
            <div class="QRcode">
              <img src="images/pc/qrcode.png" width="138px;" height="138px;">
              <div>（扫二维码下载）</div>
            </div>
          </div>
        </div>
        <div class="version">
          <span>1.1-3.9M</span>
          <span>更新于：2017-06-26 11:00</span>
        </div>
      </div>
    </div>
    <div class="pc-hack-bottom"></div>
  </div>
  <!--mobile-->
  <div class="mobile" style="display: none;">
    <div class="mobile_hack"></div>
    <img src="images/mobile/photo.png" class="mobile-img">
    <div class="content">
      <div style="height: 1.2rem;"></div>
      <a href="itms-services://?action=download-manifest&url=https://crowc.oss-cn-shanghai.aliyuncs.com/dws/app/dwx_ios.plist"
        class="mobile-ios"></a>
      <a href="http://crowc.oss-cn-shanghai.aliyuncs.com/dws/app/dwx_android.apk" class="mobile-android"></a>
      <div style="height: 0.5rem;"></div>
      <div>
        <span>1.1-3.9M</span>
        <span>更新于：2017-06-26</span>
      </div>
    </div>
    <div class="shadow">
      <img src="images/mobile/remind.png" style="width: 5rem; float: right;">
    </div>
  </div>
</body>

</html>
<script src="index.js"></script>