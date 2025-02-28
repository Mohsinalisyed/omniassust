import localFont from 'next/font/local';
export const fontGilroy = localFont({
    src: [
        {
            path: "./Gilroy-Light.ttf",
            weight: "300"
        },
        {
            path: "./Gilroy-Regular.ttf",
            weight: "400"
        },
        {
            path: "./Gilroy-Medium.ttf",
            weight: "600"
        },
        {
            path: "./Gilroy-Bold.ttf",
            weight: "700"
        },
        {
            path: "./Gilroy-Heavy.ttf",
            weight: "800"
        }
    ],
    variable: '--font-gilroy',
    display: 'swap',
})