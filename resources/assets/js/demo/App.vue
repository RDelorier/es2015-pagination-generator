<template>
  <button @click="loadNextPage">Load Next Page</button>
  <ul>
    <li v-for="user in users">
      {{user.name}} - {{user.email}}
    </li>
  </ul>
</template>

<script>
function* paginator(url) {
  do {
    yield new Promise((resolve, reject) => {
      let request = new XMLHttpRequest()
      request.open('GET', url)
      request.onload = response => {
        let data = JSON.parse(request.response)
        url = data.next_page_url
        resolve(data)
      }

      request.send()
    })
  } while (url)
}

export default {
  data () {
    return {
      users: [],
      iterator: paginator('/users?page=1')
    }
  },

  methods: {
    loadNextPage () {
      let {value: promise, done} = this.iterator.next()
      return done || promise.then(({data}) => this.users.push(...data))
    }
  },

  ready () {
    this.loadNextPage()
  }
}
</script>