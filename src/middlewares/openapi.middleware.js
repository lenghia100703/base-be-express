import swagger from 'swagger-ui-express'
import YAML from 'yamljs'
import config from '#configs/environment'

const spec = YAML.load(config.openApiPath)
spec.info.version = config.version

export default [swagger.serve, swagger.setup(spec)]