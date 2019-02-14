import React from 'react';
import './css/home.css';
import { Carousel, WingBlank } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import TabBarExample from './tab';



class home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.initialValue || 'placeholder',
            imglist: { a: require('./img/home-1.jpg'), b: require('./img/home-2.jpg') },
            arr: ['1', '2'],
            imgHeight: 176,
            arri:[{
                icon:require( './img/addShapefile-icon.png'),
                text: `旅游`
            },{
                icon:require('./img/hunyushouyang-jiaotongchuhang-jiaoyujiuxue-.png'),
                text: `机票火车票`
            },{
                icon:require( './img/jifenshangcheng.png'),
                text: `积分商城`
            },{
                icon:require('./img/qiandao.png'),
                text: `签到有礼`
            },{
                icon:require('./img/choujiang.png'),
                text: `预定抽奖`
            },{
                icon:require('./img/552cc40952152.png'), 
                text: `优惠卷`
            },{
                icon:require('./img/huafeichongzhi.png'), 
                text: `话费充值`
            },{
                icon:require('./img/shenduyou.png'), 
                text: `深度游`
            }]
        };
    }
    
    componentDidMount() {
        
    //     var map = new BMap.Map("allmap");
    // var point = new BMap.Point(116.331398,39.897445);
    // map.centerAndZoom(point,12);

    // function myFun(result) {
    // var cityName = result.name;
    // map.setCenter(cityName);
    // alert("当前定位城市:" + cityName);
    //     }
    // var myCity = new BMap.LocalCity();
    // myCity.get(myFun);



        // simulate img loading
        setTimeout(() => {
            this.setState({
                arr: [this.state.imglist.a, this.state.imglist.b],
            });
        }, 100);
    }

    

    
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.arr.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <Grid data={this.state.arri} isCarousel onClick={_el => console.log(_el)} />

                <WingBlank>
                    <div className="Carousel">
                        <div className="cou"><p>热门活动:</p></div>
                        <Carousel className="my-carousel"
                            vertical
                            dots={false}
                            dragging={false}
                            swiping={false}
                            autoplay
                            infinite
                        >
                            <div className="v-item">疯狂拆福袋</div>
                            <div className="v-item">首次住69元起</div>
                            <div className="v-item">新开门店39元起</div>
                        </Carousel>
                    </div>
                </WingBlank>
                <meta name="viewport" content="initial-scale=1.0, user-scalable=no" /> 
                <TabBarExample/>
            </WingBlank>
            
        );
    }
}


export default home;
