workflow "New workflow" {
  on = "push"
  resolves = ["actions-gh-pages"]
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run bootstrap"
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run build:prod"
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  needs = ["Build"]
  args = "branch master"
}

action "actions-gh-pages" {
  uses = "peaceiris/actions-gh-pages"
  needs = ["Filters for GitHub Actions"]
  secrets = ["ACTIONS_DEPLOY_KEY"]
  env = {
    PUBLISH_DIR = "./client/dist/client"
    PUBLISH_BRANCH = "gh-pages"
  }
}
