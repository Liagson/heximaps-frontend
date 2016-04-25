Vagrant.configure(2) do |config|
  config.vm.provider "virtualbox" do |v|
    v.memory = 1024
    v.cpus = 2
  end
  config.vm.box = "ubuntu/trusty64"
#  config.vm.synced_folder ".", "/var/www/project"
  config.vm.provider "virtualbox" do |v|
    v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
  end
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
	apt-get dist-upgrade -y
    apt-get install -y curl
	curl -sL https://deb.nodesource.com/setup_5.x | bash -
    apt-get install -y nodejs libcairo2-dev libjpeg-turbo8-dev libpango1.0-dev libgif-dev build-essential g++
    su vagrant
    mkdir /home/vagrant/node_modules
    npm install -g gulp
  SHELL
end