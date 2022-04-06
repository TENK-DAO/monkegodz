import * as React from "react"
import { navigate } from "gatsby"
import useLocales from "../../hooks/useLocales"
import * as css from "./lang-picker.module.css"

export default function LangPicker() {
  const { locales, locale } = useLocales()
  if (!locale || locales.length <= 1) return null
  return (
    <div className={css.wrap}>
      <div className={css.globe}>
        <svg width="512" height="512" viewBox="0 0 512 512">
          <path d="M23.573 246.425c-1.29 73.564 22.026 132.188 70.626 176.589 48.609 44.042 103.045 66.079 162.98 66.079 40.151 0 78.060-9.401 113.367-28.201 35.287-19.118 63.805-46.336 85.873-82.617 21.678-35.963 32.389-77.742 32.051-125.696-0.635-45.977-11.673-86.16-33.351-120.862-21.412-34.621-49.889-61.542-85.207-80.281-35.328-19.097-72.581-28.518-111.135-28.518-26.553 0-53.145 4.843-80.005 14.244-26.88 9.697-52.173 24.299-75.479 43.755-23.654 19.763-42.445 43.059-56.402 70.615-14.244 27.177-21.995 58.962-23.317 94.894v0zM153.488 143.114c-5.181 9.718-10.363 25.242-15.544 46.623-5.212 21.361-8.1 40.182-8.417 56.699h-84.214c5.171-56.361 22.989-100.762 53.422-132.516 3.257 3.257 7.465 6.185 13.291 9.4 5.837 3.236 12.319 6.482 19.415 9.718 7.486 3.236 14.602 6.492 22.047 10.076v0zM197.243 53.668c-15.565 22.016-28.211 45.681-38.236 71.26-24.607-11.663-39.854-20.081-46.008-25.579 21.054-21.381 48.927-36.618 84.244-45.681v0zM225.065 47.534c2.314-0.338 4.557-0.676 6.512-0.983 2.284-0.338 4.536-0.338 7.465-0.338h7.434v101.079c-7.772 0-17.808-1.3-30.454-4.178-12.626-2.601-25.6-6.165-38.553-10.076 12.319-30.464 28.16-58.952 47.596-85.504v0zM246.466 168.673v77.762h-97.198c0-30.157 7.148-62.218 21.381-96.215 31.764 12.288 57.037 18.453 75.817 18.453v0zM246.466 266.168v78.725c-19.097 0-44.063 6.185-74.517 18.483-4.495-8.755-9.38-23.962-14.889-45.998-5.171-22.364-7.792-39.199-7.792-51.2l97.198-0.010zM129.526 266.168c0 25.283 7.454 59.945 22.661 103.998-33.331 16.855-51.169 26.255-53.463 28.201-16.517-17.797-29.133-39.516-38.215-64.778-9.052-25.282-13.619-47.637-13.619-67.42h82.637zM246.466 363.366v104.642l-21.412-1.28c-18.432-25.62-34.642-54.764-47.585-86.825 9.083-4.516 32.072-10.014 68.997-16.538v0zM158.996 387.993c16.834 35.021 29.809 58.962 39.526 71.936-28.16-8.418-56.689-24.002-85.545-46.663 15.575-10.055 30.802-18.473 46.019-25.272v0zM287.938 466.729l-21.053 1.28v-103.342c22.016 1.28 45.026 6.482 68.997 15.237-19.446 42.762-35.635 71.608-47.944 86.825v0zM400.363 413.266c-21.678 22.661-49.572 37.918-84.255 45.036 6.82-8.438 12.647-17.5 17.817-26.583 4.905-9.063 9.411-18.462 13.291-28.519 3.901-9.697 6.164-14.858 6.512-15.216 25.897 12.667 41.431 21.063 46.633 25.283v0zM467.118 266.168c0 23.317-4.885 47.637-15.248 72.919s-22.354 45.015-36.598 59.279c-3.563-2.918-10.035-6.502-19.466-11.336-9.38-4.864-21.043-10.998-34.622-18.135 16.507-42.445 24.596-76.462 24.596-102.717l81.337-0.010zM364.073 266.168c0 28.539-7.127 60.601-21.392 97.198-8.1-4.516-20.080-9.083-35.963-13.261-15.544-4.557-28.815-6.164-39.834-5.223v-78.725l97.188 0.010zM266.885 168.673c20.091 0 45.363-6.165 75.786-18.463 4.536 7.445 9.401 22.036 14.264 43.1 4.536 20.715 7.127 38.543 7.127 53.125h-97.178v-77.762zM413.973 113.91c16.21 15.575 29.143 35.318 38.882 59.955 9.707 24.617 14.274 48.937 14.274 72.56h-82.637c0-31.119-7.772-65.444-23.296-103.322 23.603-11.397 41.431-21.074 52.777-29.194v0zM400.363 99.349c-5.202 4.537-20.091 13.599-45.353 26.88-11.673-28.816-25.62-53.463-41.462-73.841 30.761 9.063 59.914 24.606 86.815 46.961v0zM286.649 47.534c19.118 23.337 35.645 51.159 49.244 84.183-12.626 8.161-35.635 13.343-68.997 15.575v-101.079h7.445c6.492 0 10.67 0.338 12.308 1.321z" fill="var(--fg, gray)" />
        </svg>
        <span className="visuallyHidden">
          {locales.map(l => l.viewIn).join(" | ")}
        </span>
      </div>
      <select
        defaultValue={locale.id}
        onChange={e => navigate("../" + e.target.value)}
        className={css.select}
      >
        {locales.map(locale => (
          <option key={locale.id} value={locale.id}>
            {locale.id} - {locale.langPicker}
          </option>
        ))}
      </select>
    </div>
  )
}