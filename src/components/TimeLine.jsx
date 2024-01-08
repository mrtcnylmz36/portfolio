import React from "react";

const TimeLine = () => {
  return (
    <>
      <section class="items-center py-16 bg-gray-100 font-poppins dark:bg-transparent dark:text-white">
        <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div class="max-w-xl mx-auto">
            <div class="text-center ">
              <div class="relative flex flex-col items-center">
                <div class="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                  Education
                </div>
                <h1 class="text-5xl font-bold leading-tight dark:text-white">
                  {" "}
                  <span class="text-yellow-500"> Education</span>{" "}
                </h1>
                <div class="flex mt-1 mb-10 overflow-hidden rounded w-14">
                  <div class="flex-1 h-2 bg-yellow-200"></div>
                  <div class="flex-1 h-2 bg-yellow-400"></div>
                  <div class="flex-1 h-2 bg-yellow-600"></div>
                </div>
              </div>
              <p class="mb-16 text-base text-center text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus magni eius eaque? Pariatur numquam, odio quod nobis
                ipsum ex cupiditate?
              </p>
            </div>
          </div>
          <div class="w-full mx-auto lg:max-w-3xl">
            <div class="relative flex justify-between">
              <div class="hidden py-3 w-14 md:block ">
                <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">
                  Step 1
                </h2>
              </div>
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 border border-yellow-500 rounded-full dark:border-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-4 h-4 text-yellow-500 dark:text-yellow-400 bi bi-building"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                      ></path>
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"></path>
                    </svg>
                  </div>
                </div>
                <div class="w-px h-full bg-yellow-300"></div>
              </div>
              <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-transparent dark:text-white">
                <div class="relative z-20 p-6">
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    Website Launched
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between">
              <div class="hidden py-3 w-14 md:block ">
                <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">
                  Step 2
                </h2>
              </div>
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 border border-yellow-500 rounded-full dark:border-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-4 h-4 text-yellow-500 dark:text-yellow-400 bi bi-globe"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path>
                    </svg>
                  </div>
                </div>
                <div class="w-px h-full bg-yellow-300"></div>
              </div>
              <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                <div class="relative z-20 p-6">
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    Website Launched
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between">
              <div class="hidden py-3 w-14 md:block ">
                <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">
                  Step 3
                </h2>
              </div>
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 border border-yellow-500 rounded-full dark:border-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-4 h-4 text-yellow-500 dark:text-yellow-400 bi bi-code-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"></path>
                    </svg>
                  </div>
                </div>
                <div class="w-px h-full bg-yellow-300"></div>
              </div>
              <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                <div class="relative z-20 p-6">
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    Website Launched
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between">
              <div class="hidden py-3 w-14 md:block ">
                <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">
                  Step 4
                </h2>
              </div>
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 border border-yellow-500 rounded-full dark:border-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-4 h-4 text-yellow-500 dark:text-yellow-400 bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                    </svg>
                  </div>
                </div>
                <div class="w-px h-full bg-yellow-300"></div>
              </div>
              <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                <div class="relative z-20 p-6">
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    Website Launched
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="items-center py-16 bg-gray-100 font-poppins dark:bg-gray-800">
        <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div class="max-w-xl mx-auto">
            <div class="text-center ">
              <div class="relative flex flex-col items-center">
                <div class="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                  Experience
                </div>
                <h1 class="text-5xl font-bold leading-tight dark:text-white">
                  {" "}
                  <span class="text-yellow-500">Experience</span>{" "}
                </h1>
                <div class="flex mt-1 mb-10 overflow-hidden rounded w-14">
                  <div class="flex-1 h-2 bg-yellow-200"></div>
                  <div class="flex-1 h-2 bg-yellow-400"></div>
                  <div class="flex-1 h-2 bg-yellow-600"></div>
                </div>
              </div>
              <p class="mb-16 text-base text-center text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus magni eius eaque? Pariatur numquam, odio quod nobis
                ipsum ex cupiditate?
              </p>
            </div>
          </div>
          <div class="w-full mx-auto lg:max-w-3xl">
            <div class="relative flex justify-between">
              <div class="hidden py-3 w-14 md:block ">
                <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">
                  Step 1
                </h2>
              </div>
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 border border-yellow-500 rounded-full dark:border-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-4 h-4 text-yellow-500 dark:text-yellow-400 bi bi-building"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                      ></path>
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"></path>
                    </svg>
                  </div>
                </div>
                <div class="w-px h-full bg-yellow-300"></div>
              </div>
              <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                <div class="relative z-20 p-6">
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    Website Launched
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between">
              <div class="hidden py-3 w-14 md:block ">
                <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">
                  Step 2
                </h2>
              </div>
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 border border-yellow-500 rounded-full dark:border-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-4 h-4 text-yellow-500 dark:text-yellow-400 bi bi-globe"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path>
                    </svg>
                  </div>
                </div>
                <div class="w-px h-full bg-yellow-300"></div>
              </div>
              <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                <div class="relative z-20 p-6">
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    Website Launched
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between">
              <div class="hidden py-3 w-14 md:block ">
                <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">
                  Step 3
                </h2>
              </div>
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 border border-yellow-500 rounded-full dark:border-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-4 h-4 text-yellow-500 dark:text-yellow-400 bi bi-code-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"></path>
                    </svg>
                  </div>
                </div>
                <div class="w-px h-full bg-yellow-300"></div>
              </div>
              <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                <div class="relative z-20 p-6">
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    Website Launched
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative flex justify-between">
              <div class="hidden py-3 w-14 md:block ">
                <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">
                  Step 4
                </h2>
              </div>
              <div class="flex flex-col items-center w-10 mr-4 md:w-24">
                <div>
                  <div class="flex items-center justify-center w-10 h-10 border border-yellow-500 rounded-full dark:border-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-4 h-4 text-yellow-500 dark:text-yellow-400 bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                    </svg>
                  </div>
                </div>
                <div class="w-px h-full bg-yellow-300"></div>
              </div>
              <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                <div class="relative z-20 p-6">
                  <p class="mt-4 mb-2 text-xl font-bold text-gray-600 lg:mt-8 dark:text-gray-400">
                    Website Launched
                  </p>
                  <p class="text-gray-700 dark:text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TimeLine;