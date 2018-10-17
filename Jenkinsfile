node {
  stage('build') {
    echo "Building mygovbc-core-headerfooterservice..."
    openshiftBuild bldCfg: 'mygovbc-core-headerfooterservice', showBuildLogs: 'true'
  }
  stage('deploy-to-dev') {
    openshiftTag destStream: 'mygovbc-core-headerfooterservice', destTag: 'dev', srcStream: 'mygovbc-core-headerfooterservice', srcTag: 'latest'
  }
}
