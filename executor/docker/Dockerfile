FROM base/archlinux:latest

RUN pacman -Syu --noconfirm base-devel jdk9-openjdk python \
    && pacman -Sc --noconfirm
COPY ./java-run /usr/bin/
