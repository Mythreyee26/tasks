# Update and install prerequisites
sudo apt update && sudo apt upgrade -y
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

        # Install Docker (official repo)
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
        echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list

        # Install Docker packages
        sudo apt update
        sudo apt install -y docker-ce docker-ce-cli containerd.io

        # Enable and start Docker
        sudo systemctl start docker
        sudo systemctl enable docker


        # Verify Docker
        sudo docker --version
        # Install .NET SDK 7.0 (or latest)
        wget https://packages.microsoft.com/config/ubuntu/24.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
        sudo dpkg -i packages-microsoft-prod.deb
        rm packages-microsoft-prod.deb
        sudo apt update
        sudo apt install -y dotnet-sdk-7.0
        # Verify .NET installed
        dotnet --version

        ----------------------

mkdir dotnetapp
cd dotnetapp
dotnet new web -o EnvDotNetApp
cd EnvDotNetApp
----------------------
sudo apt update -y
sudo apt install git -y

git clone https://github.com/Mythreyee26/tasks.git
cd tasks
----------------------


DOCKER COMMANDS:
sudo docker build -t env-dotnet-app .
sudo docker run -d -p 80:80 -e MESSAGE="Hello from .NET Docker on EC2" -e FLAG="True" env-dotnet-app

-p 80:80 exposes container port 80 to EC2 port 80.
-e passes environment variables into container.

http://<your-ec2-public-ip>/
.NET Core Environment Variables
MESSAGE: Hello from .NET Docker on EC2
FLAG: True













# Update package index
sudo apt-get update

# Install Docker
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Enable and start Docker
sudo systemctl enable docker
sudo systemctl start docker

# Install .NET SDK 8.0
wget https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo apt-get update
sudo apt-get install -y dotnet-sdk-8.0

# (Optional) Add your user to the docker group to run docker without sudo
sudo usermod -aG docker $USER



# to delete all  packages
# Remove Docker and related packages
sudo apt-get purge -y docker-ce docker-ce-cli containerd.io
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
sudo rm /etc/apt/sources.list.d/docker.list
sudo rm /etc/apt/keyrings/docker.gpg

# Remove .NET SDK 8.0
sudo apt-get purge -y dotnet-sdk-8.0
sudo rm packages-microsoft-prod.deb
sudo rm /etc/apt/sources.list.d/microsoft-prod.list

# Clean up unused packages
sudo apt-get autoremove -y
sudo apt-get clean