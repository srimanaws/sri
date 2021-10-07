FROM ubuntu:latest
COPY myapp /
COPY myapp/mybin/bin /bin 
COPY myapp/mylib/ /lib
COPY myapp/mycurl /curl 
CMD ["node","/index.js"]
