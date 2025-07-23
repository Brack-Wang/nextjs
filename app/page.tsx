
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
<h2 className="text-2xl font-bold mb-2">7/22 周六 10 AM 🔥Lake Geneva 划船</h2>
<p className="mb-4">
  CFCHT第二次短途road trip启动！本周六我们将前往 Lake Geneva 进行划船、hiking 和野餐，欢迎大家带上自己想分享的零食～
</p>
<p className="mb-4">
  📍 Clear Water Outdoor Kayak Rental<br />
  📍327 Wrigley Drive, Lake Geneva, WI<br />
  距离Loop车程约2小时，附近设有停车场（有可能停满），建议大家提前规划出行时间。
</p>
<p className="mb-4">
  本次活动提供三种选择：<br />
  - 单人 Kayak / Paddle Board：税后 $49.28 / 人<br />
  - 双人 Kayak：$35.59 / 人
</p>
<a
  href="https://www.eventbrite.com/e/cfcht727-lake-genevaroad-trip-tickets-1514377827849?aff=oddtdtcreator"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out mb-4"
>
  报名🔗
</a>
<p className="mb-4">
  * 请报名后当天23:59前尽快联系管理员 Dessi，告知Eventbrite报名名字及选择项目后Zelle转账，否则将取消名额。管理员将在统计所有信息后统一购票 🎫
</p>
<p className="mb-4">
  * 报名双人 Kayak 的朋友请提前告知管理员队友信息，以便统计。若需组队可在群内自行发布信息，或请管理员代发。
  周四中午前如未组队成功将默认成为单人 Kayak。
</p>
<p className="mb-4">
  * 如报名后无法出席，请联系群里其他小伙伴进行转票处理。
</p>
<p className="mb-4 font-bold">大致行程：</p>
<p className="mb-4">
  - 最晚10 AM从市区集合出发<br />
  - 到达 Lake Geneva 后一起午餐（报名结束后公布餐厅信息）<br />
  - 2 PM 开始2小时划船项目<br />
  - 划船结束后湖边野餐或散步<br />
  - 晚餐是否一起将视情况而定
</p>

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
