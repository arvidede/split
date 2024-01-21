/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ui-avatars.com",
                port: "",
                pathname: "/api/**",
            },
        ],
    },
}
