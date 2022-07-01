terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

variable "digitalocean_token" {
  type = string
}

provider "digitalocean" {
  token = var.digitalocean_token
}
resource "digitalocean_kubernetes_cluster" "cluster_course_devops" {
  name    = "ukrainian-collage"
  region  = "fra1"
  version = "1.22.8-do.1"
  node_pool {
    name = "workers"
    size = "s-2vcpu-4gb-intel"
    node_count = 1
  }
}