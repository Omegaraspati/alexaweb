import React from 'react'

const Step = () => {
  return (
    <div>
        <ol
  className="border-s border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-s-0 md:border-t bg-blue-100">
  {/* <!--First item--> */}
  <li>
    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
      <div
        className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:me-0 md:ms-0"></div>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
        01.07.2021
      </p>
    </div>
    <div className="ms-4 mt-2 pb-5 md:ms-0">
      <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        scelerisque diam non nisi semper, et elementum lorem ornare.
        Maecenas placerat facilisis mollis. Duis sagittis ligula in
        sodales vehicula.
      </p>
    </div>
  </li>

  {/* <!--Second item--> */}
  <li>
    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
      <div
        className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:me-0 md:ms-0"></div>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
        13.09.2021
      </p>
    </div>
    <div className="ms-4 mt-2 pb-5 md:ms-0">
      <h4 className="mb-1.5 text-xl font-semibold">Title of section 2</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        Libero expedita explicabo eius fugiat quia aspernatur autem
        laudantium error architecto recusandae natus sapiente sit nam
        eaque, consectetur porro molestiae ipsam an deleniti.
      </p>
    </div>
  </li>

  {/* <!--Third item--> */}
  <li>
    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
      <div
        className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:me-0 md:ms-0"></div>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
        25.11.2021
      </p>
    </div>
    <div className="ms-4 mt-2 pb-5 md:ms-0">
      <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
        natus! Eum corporis illum nihil officiis tempore. Excepturi illo
        natus libero sit doloremque, laborum molestias rerum pariatur quam
        ipsam necessitatibus incidunt, explicabo.
      </p>
    </div>
  </li>
  {/* ////
  */}
  <li>
    <div className="flex-start flex items-center pt-2 md:block md:pt-0">
      <div
        className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:me-0 md:ms-0"></div>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
        25.11.2021
      </p>
    </div>
    <div className="ms-4 mt-2 pb-5 md:ms-0">
      <h4 className="mb-1.5 text-xl font-semibold">Title of section 3</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
        natus! Eum corporis illum nihil officiis tempore. Excepturi illo
        natus libero sit doloremque, laborum molestias rerum pariatur quam
        ipsam necessitatibus incidunt, explicabo.
      </p>
    </div>
  </li>
</ol>
    </div>
  )
}

export default Step