import { isDev } from 'sanity'
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '33lousv6',
    dataset: isDev ? 'development': 'production'
  }
})
