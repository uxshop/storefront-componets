import { h } from "@stencil/core"
import { newSpecPage } from "@stencil/core/testing" 
import { UxVideo } from "../ux-video"

describe('ux-video', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UxVideo],
            html: `<ux-video></ux-video>`,
            template: () => (<ux-video title="" description="" src=""></ux-video>)
        })
        expect(page.root).toBeTruthy()
    })
})