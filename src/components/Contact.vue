  <template>
    <div class="contactBox">
      <div class="myinfo">
        <h2>Contact me.</h2>
        <div
          v-for="item in basicInfo"
          :key="item.name"
          class="basicInfo"
        >
          <i :class="item.icon"></i>
          <span class="infoData">{{ item.info }}<span>{{ item.name }}</span></span>
        </div>
        <h2>Find me here.</h2>
        <ul>
          <li v-for="link in social" :key="link.name">
            <a :href="link.link">
              <span><i :class="link.icon" /></span>
            </a>
          </li>
        </ul>
      </div>
      <fieldset>
        <legend>Message me.</legend>
        <form action="MAILTO:457804000@qq.com?subject=Hi%20Khee" method="post" enctype="text/plain">
          <div class="fromwho">
            <span>Your name:</span>
            <input type="text" name="userloginname">
          </div>
          <div class="message">
            <span>Enter your comments here:</span>
            <textarea name="comment"></textarea><br />
          </div>
          <div class="formbtn">
            <input type="submit" value="send">
            <input type="reset" value="reset form">
          </div>
        </form>
      </fieldset>
    </div>
  </template>

<script>

export default {
  name: 'Contact',
  data () {
    return {
      socialColor: false,
      basicInfo: [
        {
          name: 'phone',
          info: '(+64)022-166-8009',
          icon: 'fas fa-phone-square'
        },
        {
          name: 'address',
          info: '6 Wood Glen Road, Glen Eden, Auckland',
          icon: 'fas fa-map-marker-alt'
        },
        {
          name: 'e-mail',
          info: 'Khee.Huang@hotmail.com',
          icon: 'fas fa-envelope'
        },
        {
          name: 'wechat',
          info: 'Milk_Vetch',
          icon: 'fab fa-weixin'
        }
      ],
      social: [
        {
          name: 'LinkedIn',
          icon: 'fab fa-linkedin-in',
          link: 'https://www.linkedin.com/in/xing-huang-37496b113/'
        },
        {
          name: 'Github',
          icon: 'fab fa-github-alt',
          link: 'https://github.com/MilkVetch'
        },
        {
          name: 'Facebook',
          icon: 'fab fa-facebook-f',
          link: 'https://www.facebook.com/khee.wong.9?ref=bookmarks'
        },
        {
          name: 'Twitter',
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/milk7etch'
        }
      ]
    }
  },
  methods: {
    mouseOver: function () {
      this.socialColor = true
    },
    mouseOut: function () {
      this.socialColor = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import ../assets/sass/main
*
  transition: all .4s ease

.contactBox
  display: flex
  flex-direction: column
  padding-bottom: 5rem
  .myinfo
    width: 100%
    padding-left: 2rem
    padding-right: 2rem
    h2
      font-size: 2rem
    .basicInfo
      font-family: 'Josefin Slab', serif
      color: #072515
      font-size: 1.2rem
      display: flex
      align-items: center
      margin-bottom: .8rem
      box-sizing: border-box
      border-bottom: 1px solid transparent
      color: #162440

      &:hover
        border-bottom: 1px solid #222
        background: tint($contact, 30%)
        cursor: pointer
        span.infoData
          span
            opacity: 1
      +bp(large-up)
        font-size: 1.4rem
        margin-bottom: 2rem
      i
        width: 2rem
        text-align: center
      span.infoData
        width: calc(100% - 2rem)
        margin-left: .8rem
        word-wrap: break-word
        position: relative
        span
          position: absolute
          top: 25px
          right: 0
          background: rgba(7,37,21,.8)
          color: $white
          opacity: 0
          padding: .3rem .8rem
          transition: .6s all ease

  ul
    list-style: none
    display: flex
    margin: 0
    padding: 0
    li
      margin-right: .2rem
      a
        position: relative
        display: block
        +size(60px)
        +bp(large-up)
          +size(100px)
        overflow: hidden

        span
          color: #162440
          font-size: 2rem
          +bp(large-up)
            font-size: 3rem
            line-height: 100px
          position: absolute
          +trbl(0,0,0,0)
          text-align: center
          line-height: 60px
          z-index: 20
          transition: 0s
        &:before,
        &:after,
        span:before,
        span:after
          transition: 0.2s ease
          content: ''
          position: absolute
          +trbl(0,0,0,0)
          background: tint($contact, 30%)

        &:before
          transform: translate(-100%, -100%)
        &:after
          transform: translate(-100%, 100%)
        span:before
          transform: translate(100%, -100%)
          z-index: -1
        span:after
          transform: translate(100%, 100%)
          z-index: -1

        &:hover
          span
            color: shade(#162440, 30%)
          &:before
            transform: translate(-50%, -50%)
          &:after
            transform: translate(-50%, 50%)
          span:before
            transform: translate(50%, -50%)
          span:after
            transform: translate(50%, 50%)

  fieldset
    padding-left: 2rem
    padding-right: 2rem
    margin: 2rem 0
    width: 100%
    border: none
    legend
      font-size: 2rem
    form
      color: #162440
      .fromwho
        margin-top: 2rem
        input
          background: transparent
          margin-left: .5rem
          outline: none
          color: shade($contact, 70%)
          border: none
          border-radius: 0
          border-bottom: 1px solid #162440
        input:-webkit-autofill
          -webkit-box-shadow: 0 0 0px 1000px $contact inset
      .message
        margin-top: 1.5rem
        span
          display: block
          margin-bottom: 1.5rem
        textarea
          background: tint($contact, 5%)
          transition: all .3s ease
          border: 1px solid #162440
          resize: none
          &:hover
            background: tint($contact, 30%)
          &:active
            background: tint($contact, 20%)
          outline: none
          +size(100%, 150px)
          +bp(large-up)
            height: 300px
      .formbtn
        margin-top: 1rem
        input
          cursor: pointer
          padding: 0.8rem 1.5rem
          background: $contact
          outline: none
          color: #162440
          border: 1px solid #162440
          &:hover
            background: tint($contact, 30%)
          &:active
            background: tint($contact, 20%)

  +bp(large-up)
    flex-direction: row
</style>
