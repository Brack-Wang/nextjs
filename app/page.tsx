
// pages/page.tsx or any other file within the pages directory
import Link from 'next/link';
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold"> Chicago Coffee Chat</code>
          &nbsp;You need, we see, we achieve&nbsp;and  welcome!
        </p>
      </div>

      <div className="mt-20 my-12 p-4 md:p-6 max-w-xs md:max-w-2xl lg:max-w-4xl w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center">
        <h2 className="text-2xl font-bold mb-2"> 芝加哥CFCHT </h2>


{/* TODO: Change the content for weekly events' information below */}
{/* Event Details Replacement Start */}
<h2 className="text-2xl font-bold mb-2">【本周安排】报名中</h2>
<h2 className="text-2xl font-bold mb-2">12/31 周二 6:30 PM - 0:30 AM 🎆跨年</h2>
<p className="mb-4">
  <a href="https://www.eventbrite.com/e/cfcht1231-630-tickets-1124633893249?aff=oddtdtcreator" target="_blank" className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">报名🔗</a>
</p>

</p>
<h3 className="text-xl font-bold mt-4">🎯 Agenda：</h3>
<p className="mb-4">
  6:30-11 PM 晚餐 + 交换礼物 + 桌游<br />
  📍 Marquee at Block 37<br />
  25 W Randolph St, Chicago, IL, 60601<br />
  （请准时到大堂集合）
 
    <p className="mb-4">
  11 PM 🎆<br />    
  🚗 Navy Pier附近停车 & 散步去看烟花<br />
  *建议跟管理员车，我们已预订停车位*2。友情提示：自驾的各位请注意提前预约车位，跨年当天可能不好找。
</p>

<h3 className="text-xl font-bold mt-4">🎁 交换礼物：</h3>
<p className="mb-4">
  * 请准备价值$10~25的小礼物！<br />
  * 交换方式当天公布，不需要精美包装，但需不看到礼物本身。
</p>

<h3 className="text-xl font-bold mt-4">🍽️ 晚餐AA：</h3>
<p className="mb-4">
  外卖餐厅选择：<br />
  - Central East Asian Cuisine 印象新疆<br />
  - Taipei Cafe 小台北<br />
  *请告知管理员 Justin 想点的菜（两间餐馆共选1-2道菜/人）。
</p>

<h3 className="text-xl font-bold mt-4">🧩桌游：</h3>
<p className="mb-4">
  提供游戏：爆炸猫、说书人、你画我猜、卡坦岛<br />
  * 也欢迎自带桌游。
</p>

<h3 className="text-xl font-bold mt-4">🚗 公寓附近停车资讯：</h3>
      <p className="mb-4">
  - Theatre District Garage: 181 N Dearborn St.<br />
  - Wabash Randolph Garage: 20 East Randolph St.<br />
  - Government Center Garage: 81 W Lake St.<br />
</p>
<p className="mb-4">
  * 请在Eventbrite报名后，当天23:59前私信管理员 Justin，同时备注Eventbrite报名名字 & 菜名及其餐厅，否则将取消名额。<br />
  * 现场有饮料，欢迎带想分享的东西。如有，请提前通知管理员。<br />
  * 如报名后无法出席，请联系群里其他小伙伴，进行转名额。
</p>

<p className="mt-4 font-bold">那么各位，跨年夜见！🎆</p>
<p className="mt-4 font-bold">固定报名时间：每周三8PM</p>
{/* Event Details Replacement End */}






<p className="mt-4 font-bold">欢迎👏点击⬇️Groups进入小红书和二手群🌞：</p>
{/* Event Details Replacement End */}




{/*   #################################################################################################################### */}

        
      </div>

      {/* Button of About and Events Start*/}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Knowing about us!
          </p>
        </Link>
        <Link
          href="/events"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Events{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            All previous events we hold!
          </p>
        </Link>

        <Link
          href="/groups"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Groups{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            All groups we share!
          </p>
        </Link>
        {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
      {/* Button of About and Events End*/}

    </main>
  );
}
