import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import ReactDOM from 'react-dom';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';

import './index.css';


const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;
const EventListener = ScrollAnim.Event;
// ScrollAnim.scrollScreen({scrollInterval: 600});
export default class Home extends React.Component {
    componentDidMount() {
        // 添加改变窗口事件,可加setTimeout
        EventListener.addEventListener('resize.userResize', this.barAnimate.bind(this));
    }

    onFocus = (e) => {
        console.log(e, 'focus');
        this.dom = e.target;
        this.barAnimate();
    }

    onBlur = (e) => {
        console.log(e, 'blur');
    }

    onChange = (e) => {
        console.log(e);
    }

    barAnimate = () => {
        if (!this.dom) {
            return;
        }
        const bar = this.bar;
        bar.style.left = `${this.dom.getBoundingClientRect().left}px`;
    }

    render() {
        return (<div>
            <Element className="pack-page page0">
                <QueueAnim className="home-title">
                    <div className="page-title" key='0'>
                        <p>公司简介</p>
                        <h2>页面一进入加载的动画</h2>
                    </div>
                    <div className="page-description" key='1'>
                        <p>JOUAV®成都纵横自动化技术股份有限公司，成立于2010年，国家高新技术企业。秉承技术创新、航空品质、服务至上的理念，致力于成为世界领先的垂直起降固定翼无人机研发和制造公司。我们提供的工业级垂直起降固定翼无人机系统和行业整体解决方案，包括无人飞行平台、有效载荷集成，培训和技术支持。</p>
                    </div>
                </QueueAnim>
            </Element>
            <ScrollOverPack className="page1">
                <TweenOne className="tween-one" animation={{opacity: 1}}>
                    常规的动画，进入进出
                </TweenOne>
                <QueueAnim>
                    <div key="0" className="demo-content">为什么选择JOUAV®？</div>
                    <div key="1" className="demo-content" style={{backgroundColor: '#F38EAD'}}>为什么选择JOUAV®？</div>
                    <div key="2" className="demo-content">为什么选择JOUAV®？</div>
                    <div key="3" className="demo-content">为什么选择JOUAV®？</div>
                </QueueAnim>
            </ScrollOverPack>

            <ScrollOverPack
                className="pack-page page2"
                style={{backgroundColor: '#0098CE'}}
                always={false}
            >

                <div className="page2-title" key='0'>只进入一次的动画</div>
                <TweenOne
                    className="demo-content"
                    animation={{
                        y: 0,
                        opacity: 1,
                        duration: 1000,
                    }}
                    key="2"
                    style={{transform: 'translateY(180px)', opacity: 0}}
                >
                    JOUAV®成都纵横自动化技术股份有限公司，成立于2010年，国家高新技术企业。秉承技术创新、航空品质、服务至上的理念，致力于成为世界领先的垂直起降固定翼无人机研发和制造公司。我们提供的工业级垂直起降固定翼无人机系统和行业整体解决方案，包括无人飞行平台、有效载荷集成，培训和技术支持。
                </TweenOne>
                <TweenOne
                    className="demo-content"
                    animation={{
                        y: 0,
                        opacity: 1,
                        duration: 1000
                    }}
                    key="2"
                    style={{transform: 'translateY(120px)', opacity: 0}}
                >
                    JOUAV®成都纵横自动化技术股份有限公司，成立于2010年，国家高新技术企业。秉承技术创新、航空品质、服务至上的理念，致力于成为世界领先的垂直起降固定翼无人机研发和制造公司。我们提供的工业级垂直起降固定翼无人机系统和行业整体解决方案，包括无人飞行平台、有效载荷集成，培训和技术支持。
                </TweenOne>

            </ScrollOverPack>

            <ScrollOverPack
                className="pack-page page3"
                style={{backgroundColor: '#174270'}}
                playScale={0.8}
            >
                <TweenOne animation={{opacity: 1}} style={{opacity: 0}} key="0"
                          className="page2-title"
                >
                    在页面80％时进入
                </TweenOne>
                <Animate key="1" transitionName="fade" transitionAppear>
                    <div className="demo-content">
                        JOUAV®成都纵横自动化技术股份有限公司，成立于2010年，国家高新技术企业。秉承技术创新、航空品质、服务至上的理念，致力于成为世界领先的垂直起降固定翼无人机研发和制造公司。我们提供的工业级垂直起降固定翼无人机系统和行业整体解决方案，包括无人飞行平台、有效载荷集成，培训和技术支持。
                    </div>
                </Animate>
                <TweenOne
                    className="demo-content"
                    animation={{y: 0, opacity: 1}}
                    key="2"
                    style={{transform: 'translateY(120px)', opacity: 0}}
                >
                    JOUAV®成都纵横自动化技术股份有限公司，成立于2010年，国家高新技术企业。秉承技术创新、航空品质、服务至上的理念，致力于成为世界领先的垂直起降固定翼无人机研发和制造公司。我们提供的工业级垂直起降固定翼无人机系统和行业整体解决方案，包括无人飞行平台、有效载荷集成，培训和技术支持。
                </TweenOne>
            </ScrollOverPack>
        </div>);
    }
}
