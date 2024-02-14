{ pkgs, ... }:

{
  # https://devenv.sh/packages/
  packages = [ pkgs.git ];

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    npm.install.enable = true;
  };

  # https://devenv.sh/pre-commit-hooks/
  pre-commit.hooks.prettier.enable = true;

  # https://devenv.sh/processes/
  processes.server.exec = "npm run start";
  processes.test-server.exec = "npm run start-test-server";

  # See full reference at https://devenv.sh/reference/options/
}
