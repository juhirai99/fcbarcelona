export const FanComment = () => import('../../components/FanComment.vue' /* webpackChunkName: "components/fan-comment" */).then(c => wrapFunctional(c.default || c))
export const Features = () => import('../../components/Features.vue' /* webpackChunkName: "components/features" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Menus = () => import('../../components/Menus.vue' /* webpackChunkName: "components/menus" */).then(c => wrapFunctional(c.default || c))
export const MoreNews = () => import('../../components/MoreNews.vue' /* webpackChunkName: "components/more-news" */).then(c => wrapFunctional(c.default || c))
export const News = () => import('../../components/News.vue' /* webpackChunkName: "components/news" */).then(c => wrapFunctional(c.default || c))
export const Partners = () => import('../../components/Partners.vue' /* webpackChunkName: "components/partners" */).then(c => wrapFunctional(c.default || c))
export const Store = () => import('../../components/Store.vue' /* webpackChunkName: "components/store" */).then(c => wrapFunctional(c.default || c))
export const Survey = () => import('../../components/Survey.vue' /* webpackChunkName: "components/survey" */).then(c => wrapFunctional(c.default || c))
export const TeamsPlayList = () => import('../../components/TeamsPlayList.vue' /* webpackChunkName: "components/teams-play-list" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
