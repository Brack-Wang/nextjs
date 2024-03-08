
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold"> Chicago Coffee Chat</code>
          &nbsp;You need, we see, we achieve&nbsp;and  welcome!
        </p>
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      {/* Event Details Replacement Start */}
      <div className="my-12 p-4 md:p-6 max-w-xs md:max-w-2xl lg:max-w-4xl w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-center">
        <h2 className="text-2xl font-bold mb-2">【本周安排】报名中</h2>
        <p className="mb-4">3/10 周日 1PM - 4PM<br />️小桌Shift制主题聊天 （i人友好）<br />限定报名人数：9人，微信限定4人</p>
        <p className="mb-4">320 River Bar<br />📍320 N Dearborn St, Chicago, IL 60654<br />Located in: The Westin Chicago River North</p>
        <a href="https://www.eventbrite.co.nz/e/cfcht-310-1pm-tickets-858290468897?aff=oddtdtcreator" target="_blank" className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">报名🔗</a>
        <p className="mt-4">本次活动主题投票（此投票不等于报名）<br /><a href="https://forms.gle/3BLyjCJshx5oz3Uv8" className="text-blue-600 hover:underline" target="_blank">点击这里投票</a></p>
        <p className="mt-4">报名成功的各位，饮品统一预订，点单Google Form链接<br /><a href="https://forms.gle/SiBYXj3vpWv8xURL6" className="text-blue-600 hover:underline" target="_blank">点击打开填写</a></p>
        <p className="mt-4 italic">*报名成功后，如无法出席请在eventbrite取消，平台waitlist将自动补位，请各位留意自己的邮箱</p>
        <p className="mt-4 font-bold">那么各位，这周日见！🌞</p>
      </div>
      {/* Event Details Replacement End */}

    </main>
  );
}
