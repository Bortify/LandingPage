/** @type {import('next').NextConfig} */

const withSvgr = require('next-plugin-svgr')

const { webpack } = withSvgr()

module.exports = {
  webpack,
}
