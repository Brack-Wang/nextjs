
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


{/*   #################################################################################################################### */}
      {/* TODO: Change the content for weekly events' information below */}
{/* TODO: Change the content for weekly events' information below */}
      {/* TODO: Update weekly event details below */}
      {/* Event Details Replacement Start */}
        <h2 className="text-2xl font-bold mb-2">【本周安排】报名中</h2>
        <h2 className="text-2xl font-bold mb-2">10/6 周日 1PM - 4PM</h2>
        <p className="mb-4">☕️小桌Shift制主题聊天（i人友好）<br />限定报名人数：12人</p>
        <p className="mb-4">地点：1821 W Hubbard St, Suite 209, 二楼<br />楼下有免费停车场和街边停车位</p>
        <p className="mb-4">场地预约平摊：$21/人（含税）<br />请报名后当天23点前通过Zelle支付管理员</p>
        <p className="mb-4">Zelle 收款人：QIONG YIN<br />Email: yin_chloe@icloud.com</p>
        <p className="mb-4">欢迎大家带一些自己想分享的小零食！</p>
           <a href="https://www.eventbrite.com/e/cfcht106-1-4pm-tickets-1032602721537?aff=oddtdtcreator" target="_blank" className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">报名🔗</a>
        <p className="mb-4">活动简介：<br />2轮Shift制小桌主题聊天 + Gather + 自由讨论</p>
        <p className="mb-4">共有4个不同主题的聚点，每个聚点4人，每轮45分钟，2轮后轮换其他主题。</p>
        <p className="mb-4">本次话题包括：<br />音乐分享、来芝加哥/美国的理由/想做什么、保暖建议、秋冬必备等</p>
        <p className="mt-4">*报名成功后，请于当天22:00前通过Zelle支付场地费用，否则名额将被取消</p>
        <p className="mt-4">*如报名后无法出席，请联系群里的其他成员转让票务</p>
        <p className="mt-4">*此次活动为我们自行预约场地的尝试。以往免费场地常出现人数限制或店家不支持活动的情况。本次收取的费用将用于场地预订。若费用不足，可能会更换场地，敬请理解！如有变动，会提前通知所有参与者。</p>
      {/* Event Details Replacement End */}

<p className="mt-4 font-bold">那么各位，周日见！🌞</p>
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
