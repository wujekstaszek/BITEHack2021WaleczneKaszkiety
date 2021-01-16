FROM python:3.8.3-alpine


ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

RUN apk add --update nodejs nodejs-npm

WORKDIR /usr/src/backend
COPY requirements.txt /deps/

RUN pip install --upgrade pip
RUN pip install -r /deps/requirements.txt

COPY . .
ENTRYPOINT ["/usr/src/backend/entrypoint.sh"]
