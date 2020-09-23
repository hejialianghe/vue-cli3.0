/**
 * @description 由于懒加载需要各种图片尺寸，根据url返回的尺寸修改svg文件的尺寸
 * @author name xuxiding
 * @date 2018-12-22
 * @param {number} [width=100]
 * @param {number} [height=100]
 * @returns svg base64字符串
 */
export default function dyCreateSvg (width = 100, height = 100) {
  let svg =
  `
  <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"
	 width="${width}"
   height="${height}"
	 >
<style type="text/css">
	.st0{fill:none;}
	.st1{fill:#E0E0E0;}
</style>
<rect class="st0" width="500" height="500"/>
<g id="XMLID_410_">
	<g id="XMLID_411_">
		<g id="XMLID_422_">
			<path id="XMLID_423_" class="st1" d="M189.2,356.3L189.2,356.3c-1.5-0.6-3.1-1.2-4.5-1.9C186.1,355.2,187.7,355.7,189.2,356.3z"
				/>
		</g>
		<g id="XMLID_420_">
			<path id="XMLID_421_" class="st1" d="M189.2,356.3L189.2,356.3c-1.5-0.6-3.1-1.2-4.5-1.9C186.1,355.2,187.7,355.7,189.2,356.3z"
				/>
		</g>
		<path id="XMLID_418_" class="st1" d="M233.5,198.6l3.9-7.2c0.6-1.1,1.8-1.8,2.9-1.8h7.6c2.2,0,3.4,2.3,2,4.3l-4.1,6.4
			c-1.2,2-0.1,4.3,2,4.3h0.1c1.6,0,2.8,1.3,2.6,2.9l0,0c-0.2,1.6-1.7,2.9-3.3,2.9h-6.2c-1.1,0-2.3,0.7-2.9,1.7l-0.1,0.2
			c-1.2,2,0,4.2,2.1,4.2h6.4c1.6,0,2.8,1.3,2.6,2.9l0,0c-0.2,1.6-1.7,2.9-3.3,2.9H237c-1.6,0-3.1,1.3-3.3,2.9l-0.8,6.4
			c-0.2,1.6-1.7,2.9-3.3,2.9h-7.1c-1.6,0-2.8-1.3-2.6-2.9l0.8-6.4c0.2-1.6-1-2.9-2.6-2.9h-8.6c-1.6,0-2.8-1.3-2.6-2.9l0,0
			c0.2-1.6,1.7-2.9,3.3-2.9h6.4c2.2,0,3.9-2.3,3.1-4.2l-0.1-0.2c-0.4-1-1.3-1.7-2.4-1.7h-6.2c-1.6,0-2.8-1.3-2.6-2.9l0,0
			c0.2-1.6,1.7-2.9,3.3-2.9h0.1c2.2,0,4-2.3,3.1-4.3l-2.6-6.4c-0.8-2,1-4.3,3.1-4.3h7.7c1.2,0,2.1,0.7,2.5,1.8l2.4,7.3
			C228.9,201,232.2,201,233.5,198.6z"/>
		<g id="XMLID_412_">
			<path id="XMLID_417_" class="st1" d="M189.2,356.3L189.2,356.3c-1.5-0.6-3.1-1.2-4.5-1.9C186.1,355.2,187.7,355.7,189.2,356.3z"
				/>
			<path id="XMLID_413_" class="st1" d="M351.2,321.5c-2.2,7.3-4.8,10-4.8,10c-1.4,2-4.9,3.8-7.2,3.4c-2.8-0.5-4.2-2.3-5-4.2
				c-0.6-1.5-0.7-4.5,0.7-9c0,0,2.2-7,5.8-14.2c0,0,7.6-17.5,13-30.2c0.2-0.4,0.4-0.8,0.6-1.2c4.7-10.5,7.4-22.4,7.4-35
				c0-42.7-30.5-77.2-68.2-77.2c-3.6,0-7.1,0.4-10.5,1c6.4,10.6,10,23.1,10,36.4c0,0.4-0.1,0.8-0.1,1.2
				c-1.6-35.4-30.8-63.7-66.7-63.7c-36.9,0-66.8,29.9-66.8,66.8c0,6,0.8,11.8,2.3,17.3c0.7,2.7,1.6,5.4,2.7,8
				c9.7,23.8,32.8,40.7,59.9,41.5c-0.8,0-1.6,0.1-2.4,0.1c-26.9,0-50.3-14.9-62.4-37c-8.7,8.6-15.4,19.3-19.3,31.2
				c-2.6,7.9-4.1,16.4-4.1,25.2c0,5.3,0.5,10.5,1.5,15.4c1,11.3,3.6,22.3,7.7,32.5c0.7,1.8,1.8,3.1,3.6,2.9c1.7-0.2,2.8-1.8,2.6-3.4
				c0-0.1-0.1-0.4-0.1-0.5l0,0c-1.6-6.1-2.7-12.4-3.1-18.8c4.5,8.7,10.3,16.6,17.4,23.3c7.1,6.7,15.3,12.3,24.4,16.3l0,0
				c0.3,0.2,0.7,0.3,1,0.3c1.2,0,2-0.9,2.1-2c0-0.4-0.1-0.9-0.4-1.2l0,0l0,0l0,0l0,0c-0.2-0.4-0.4-0.9-0.7-1.3
				c0-0.1-0.1-0.1-0.1-0.1c-0.2-0.4-0.4-0.9-0.7-1.3c-0.2-0.4-0.4-1-0.6-1.4l0,0l0,0c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.1-0.3-0.1-0.4
				c-0.1-0.5-0.4-1-0.5-1.5c-0.1-0.2-0.1-0.5-0.2-0.7c0-0.1-0.1-0.2-0.1-0.4c-0.1-0.3-0.1-0.6-0.2-0.9c-0.1-0.5-0.3-1-0.4-1.5
				c-0.1-0.2-0.1-0.4-0.1-0.6c-0.1-0.3-0.1-0.5-0.1-0.8c-0.1-0.6-0.1-1.2-0.2-1.8c0-0.2-0.1-0.4-0.1-0.7c0-0.1,0-0.3,0-0.4
				c-0.1-1-0.1-1.9-0.1-2.9l0,0c0-19.1,15.5-34.6,34.6-34.6c1,0,1.8,0.1,2.7,0.1c0.1,0,0.3,0,0.4,0c0.9,0.1,1.8,0.2,2.6,0.4
				c0.1,0,0.2,0.1,0.3,0.1c1.8,0.4,3.7,0.8,5.4,1.4l0,0c0.8,0.3,1.6,0.6,2.4,1c0,0,0.1,0,0.1,0.1c1.5,0.7,3.1,1.5,4.5,2.4
				c0.1,0,0.1,0.1,0.1,0.1c1.4,0.9,2.8,1.9,4,3c0.1,0.1,0.1,0.1,0.1,0.1c0.7,0.6,1.2,1.1,1.8,1.7l0.1,0.1c0.6,0.6,1.1,1.2,1.6,1.8
				l0.1,0.1c0.5,0.7,1,1.2,1.5,1.9c0.1,0.1,0.1,0.1,0.2,0.3c1,1.3,1.8,2.7,2.5,4.1c0.1,0.1,0.1,0.2,0.2,0.4c0.4,0.7,0.7,1.5,1,2.2
				c0,0.1,0.1,0.1,0.1,0.2c0.3,0.7,0.5,1.4,0.8,2.1c0.1,0.1,0.1,0.3,0.1,0.4c0.2,0.7,0.4,1.5,0.7,2.3c0,0.1,0.1,0.3,0.1,0.4
				c0.1,0.7,0.3,1.4,0.4,2.1c0,0.1,0.1,0.2,0.1,0.4c0.1,0.8,0.2,1.6,0.3,2.4c0,0.1,0,0.4,0.1,0.5c0.1,0.8,0.1,1.7,0.1,2.5
				c0,0.7,0,1.5-0.1,2.3c0,0.2,0,0.4-0.1,0.6c0,0.1,0,0.3-0.1,0.5c0,0.1,0,0.1,0,0.1c-0.1,0.4-0.1,0.9-0.1,1.3c0,0.1,0,0.2-0.1,0.3
				c-0.1,0.5-0.1,1-0.3,1.5c0,0.1,0,0.1,0,0.1c0,0.1-0.1,0.4-0.1,0.5s-0.1,0.2-0.1,0.4c-0.1,0.7-0.3,1.3-0.5,2
				c0,0.1-0.1,0.1-0.1,0.3c0,0.1,0,0.1-0.1,0.1c-0.3,1-0.7,2-1,2.9c0,0.1-0.1,0.1-0.1,0.1c-0.1,0.4-0.3,0.7-0.5,1.1
				c0,0.1-0.1,0.1-0.1,0.1c-0.2,0.5-0.5,1.1-0.8,1.6c0,0,0,0.1-0.1,0.1c-0.4,0.8-0.9,1.6-1.4,2.4c-0.1,0.1-0.1,0.2-0.2,0.3
				c0,0,0,0,0,0.1l0,0l0,0c-0.3,0.4-0.5,0.7-0.5,1.2c0,1,0.8,1.9,1.9,2c0.4,0,0.7-0.1,1-0.3l0,0c17.1-9.5,30.2-25.1,36.6-43.9
				c-0.4-2.2-0.8-4.5-1-6.8c-0.2-3.2-0.2-6.4,0.1-9.4c1.3,1.1,2.7,2.1,4.2,3c7,4.5,15.5,7,24.5,6.3c8.3-0.7,16-3.9,22-8.8
				c-6.4,10.6-17.6,18.1-30.9,19.1c-1.7,0.1-3.4,0.1-5.1,0.1c2.5,21.4,15,37.6,30.1,37.6c13.6,0,25.2-13.3,29.1-31.7
				C361.2,325.2,355,322.9,351.2,321.5z M229.5,251.9c-22.6,0-40.9-18.3-40.9-40.9s18.3-40.9,40.9-40.9s40.9,18.3,40.9,40.9
				S252.1,251.9,229.5,251.9z M327.2,254.1c-5.2,0-9.4-4.2-9.4-9.4s4.2-9.4,9.4-9.4c5.2,0,9.4,4.2,9.4,9.4S332.4,254.1,327.2,254.1z
				"/>
		</g>
	</g>
</g>
</svg>`
  return `data:image/svg+xml;utf8,${svg}`
}