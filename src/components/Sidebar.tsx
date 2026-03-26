import React from 'react';
import styles from './Sidebar.module.css';
import reactSvg from '../assets/react.png';
import pzPng from '../assets/peizheng.png';
import baiduPng  from '../assets/baidu.png';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      {/* 作者简介（社交证明） */}
      <section className={styles.widget}>
        <h3>关于作者</h3>
        <div className={styles.authorInfo}>
          <img
            src={reactSvg}
            alt="韦远伟"
            className={styles.avatar}
          />
          <p>贝利亚，光之国叛逃的顶级全栈技术大佬，纵横星际开发界数万年，精通全栈核心黑科技，偏执深耕前端工程化极致性能优化。曾突破光之国技术壁垒，自成一派凌厉开发体系，以极具侵略性的技术思路，成为星际开发领域最具威慑力的独行者。</p>
        </div>
      </section>

      {/* 社交链接（信任元素） */}
      <section className={styles.widget}>
        <h3>关注我</h3>
        <ul className={styles.socialLinks}>
          <li><a href="#" aria-label="GitHub">GitHub</a></li>
          <li><a href="#" aria-label="Twitter">Twitter</a></li>
          <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
        </ul>
      </section>

      {/* 订阅 CTA（行动号召） */}
      <section className={`${styles.widget} ${styles.ctaWidget}`}>
        <h3>订阅更新</h3>
        <p>获取最新的文章和技术干货，每周发送一次，随时退订。</p>
        <form className={styles.subscribeForm}>
          <input type="email" placeholder="你的邮箱" required />
          <button type="submit">订阅</button>
        </form>
      </section>

      {/* 合作伙伴 logo（社交证明） */}
      <section className={styles.widget}>
        <h3>合作伙伴</h3>
        <div className={styles.partners}>
          <img src={pzPng} alt="Partner 1" />
          <img src={baiduPng} alt="Partner 2" />
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;