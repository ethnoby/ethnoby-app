export default function ({ store, redirect }) {
  if (!store.state.user) {
    // eslint-disable-next-line no-console
    console.log('in middleware')
    redirect('/')
    // eslint-disable-next-line no-console
    console.log('routed')
  }
}
