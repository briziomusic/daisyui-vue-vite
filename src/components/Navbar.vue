<template>
  <div class="bg-base-100">
    <div class="bg-primary w-full h-6"></div>
    <!-- app name & brand logo -->
    <div class="w-full max-w-screen-2xl m-auto">
      <div class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabindex="0"
              class="
                menu menu-compact
                dropdown-content
                mt-3
                p-2
                shadow
                bg-base-100
                rounded-box
                w-52
              "
            >
              <li><a>Item 1</a></li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </a>
                <ul class="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <span class="btn btn-ghost normal-case text-xl">AppOne</span>
        </div>
        <div class="navbar-center hidden lg:flex"></div>
        <div class="navbar-end">
          <img
            class="
              max-w-lg
              h-auto
              rounded-lg
              transition-all
              duration-300
              cursor-pointer
              filter
              grayscale
              hover:grayscale-0
              max-h-8
            "
            src="https://th.bing.com/th/id/OIP.U1i68gGc1VfEbkKLYK0vJwHaCn?pid=ImgDet&rs=1"
            alt="brand logo"
          />
        </div>
      </div>
    </div>
    <!-- menu -->
    <div class="bg-base-300 shadow-xl">
      <div class="w-full max-w-screen-2xl m-auto">
        <ul class="menu menu-horizontal uppercase">
          <li>
            <a class="btn btn-ghost rounded-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>
          </li>
          <li tabindex="0">
            <a class="fix-baseline">
              My Account
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </a>
            <ul
              class="
                menu menu-compact
                dropdown-content
                p-2
                shadow
                bg-base-100
                w-52
              "
            >
              <li><a>Change password</a></li>
              <li><a>Logout</a></li>
            </ul>
          </li>
          <li><a class="fix-baseline">My Requests</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
