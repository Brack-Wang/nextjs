
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
        
{/* Event Details Replacement Start */}
  <h2 className="text-2xl font-bold mb-2">【本周安排】报名中</h2>
  <h2 className="text-2xl font-bold mb-2">8/24 周日 3PM-5:30PM TOPGOLF 娱乐版高尔夫</h2>
  <p className="mb-4">含税价格：24.28🔪/人 <br />限定报名人数：6人</p>
  <p className="mb-4">价格按6人报名计算，如果有更多朋友报名管理员会退还多余费用，另外从未玩过Topgolf的朋友有$5 new player fee</p>
  <p className="mb-4">活动后大家会一起吃晚饭。需要carpool或是可以提供carpool的朋友麻烦报名后尽快联系管理员</p>
  <p className="mb-4">Topgolf Schaumburg<br />📍2050 Progress Pkwy, Schaumburg, IL 60173<br />距离Loop车程大概1hr，请各位合理安排出行时间</p>
  <a href="https://www.eventbrite.com/e/cfcht824-3-pm-530-pm-topgolf-tickets-1608883827839" target="_blank" className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">报名🔗</a>
  <p className="mt-4">Zelle:<br />Tianyou Luo<br />4707753396</p>
  <p className="mt-4">*请Eventbrite报名成功后，当天23:59前 Zelle，否则将取消名额</p>
  <p className="mt-4">*如报名后无法出席，请联系群里其他小伙伴转票</p>
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
