let fileList = {
    "Global.xml": {
        "_declaration": {
            "_attributes": {
                "version": "1.0",
                "encoding": "UTF-8"
            }
        },
        "mule": {
            "_attributes": {
                "xmlns:secure-properties": "http://www.mulesoft.org/schema/mule/secure-properties",
                "xmlns": "http://www.mulesoft.org/schema/mule/core",
                "xmlns:doc": "http://www.mulesoft.org/schema/mule/documentation",
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "xsi:schemaLocation": "http://www.mulesoft.org/schema/mule/core http://www.mulesoft.org/schema/mule/core/current/mule.xsd\r\nhttp://www.mulesoft.org/schema/mule/secure-properties http://www.mulesoft.org/schema/mule/secure-properties/current/mule-secure-properties.xsd"
            },
            "secure-properties:config": {
                "_attributes": {
                    "name": "Secure_Properties_Config",
                    "doc:name": "Secure Properties Config",
                    "doc:id": "93a8cf43-507e-4a17-871d-24b84b13c6f2",
                    "file": "config-dev.yaml",
                    "key": "c!31l0SecureP4s5w0rdc!31l0SecureP4s5w0rd"
                }
            }
        }
    },
    "logger-performance.xml": {
        "_declaration": {
            "_attributes": {
                "version": "1.0",
                "encoding": "UTF-8"
            }
        },
        "mule": {
            "_attributes": {
                "xmlns:ee": "http://www.mulesoft.org/schema/mule/ee/core",
                "xmlns:http": "http://www.mulesoft.org/schema/mule/http",
                "xmlns": "http://www.mulesoft.org/schema/mule/core",
                "xmlns:doc": "http://www.mulesoft.org/schema/mule/documentation",
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "xsi:schemaLocation": "http://www.mulesoft.org/schema/mule/core http://www.mulesoft.org/schema/mule/core/current/mule.xsd\r\nhttp://www.mulesoft.org/schema/mule/http http://www.mulesoft.org/schema/mule/http/current/mule-http.xsd\r\nhttp://www.mulesoft.org/schema/mule/ee/core http://www.mulesoft.org/schema/mule/ee/core/current/mule-ee.xsd"
            },
            "http:listener-config": {
                "_attributes": {
                    "name": "HTTP_Listener_config",
                    "doc:name": "HTTP Listener config",
                    "doc:id": "a164fdfb-764f-4f48-8d6c-e215ef374ccb"
                },
                "http:listener-connection": {
                    "_attributes": {
                        "host": "0.0.0.0",
                        "port": "8081"
                    }
                }
            },
            "flow": [
                {
                    "_attributes": {
                        "name": "logger-performanceFlow",
                        "doc:id": "4ea3dc9b-c7c7-4155-a181-8820ca9edf77"
                    },
                    "http:listener": {
                        "_attributes": {
                            "doc:name": "Listener",
                            "doc:id": "e9c29fab-e9dd-4af7-9756-7addd061044f",
                            "config-ref": "HTTP_Listener_config",
                            "path": "/teste"
                        }
                    },
                    "logger": {
                        "_attributes": {
                            "level": "INFO",
                            "doc:name": "Logger",
                            "doc:id": "8beda45a-5bac-48d2-9beb-a2b0c7b8502d",
                            "message": "Entrada de teste"
                        }
                    },
                    "http:request": {
                        "_attributes": {
                            "method": "POST",
                            "doc:name": "Request",
                            "doc:id": "36d72f1f-afce-4f14-a1af-9a3c35dbb3aa",
                            "config-ref": "HTTP_Request_configuration",
                            "path": "/service"
                        }
                    }
                },
                {
                    "_attributes": {
                        "name": "logger-performanceFlow1",
                        "doc:id": "37c52df8-e20d-42b5-88d9-2c56165f9966"
                    },
                    "http:listener": {
                        "_attributes": {
                            "doc:name": "Listener",
                            "doc:id": "a2d2241d-f002-4823-87da-dae5082081ca",
                            "config-ref": "HTTP_Listener_config",
                            "path": "/payload"
                        }
                    },
                    "logger": {
                        "_attributes": {
                            "level": "INFO",
                            "doc:name": "Logger",
                            "doc:id": "0e8fa1e4-982b-46ad-bf98-260fb2290218"
                        }
                    },
                    "try": {
                        "_attributes": {
                            "doc:name": "Try",
                            "doc:id": "d81315bb-4096-41fc-9f0b-386c3a9a9da8"
                        },
                        "set-payload": {
                            "_attributes": {
                                "value": "#[payload default {}]",
                                "doc:name": "Set Payload",
                                "doc:id": "e17ae039-58b4-4859-86f7-ca901e882b95"
                            }
                        },
                        "error-handler": {
                            "on-error-continue": {
                                "_attributes": {
                                    "enableNotifications": "false",
                                    "logException": "false",
                                    "doc:name": "On Error Continue",
                                    "doc:id": "a1d764ff-9180-4879-9ee5-a7359bc8524f"
                                },
                                "set-payload": {
                                    "_attributes": {
                                        "value": "#[\"\"]",
                                        "doc:name": "Set Payload",
                                        "doc:id": "8ceda737-c20e-4718-ac6a-3f8a712dcba8"
                                    }
                                }
                            }
                        }
                    },
                    "ee:transform": {
                        "_attributes": {
                            "doc:name": "Transform Message",
                            "doc:id": "cd537d37-6c76-4eb1-b0bf-ea787a54022e"
                        },
                        "ee:message": {
                            "ee:set-payload": {
                                "_cdata": "%dw 2.0\r\noutput application/json\r\n---\r\npayload"
                            }
                        }
                    }
                }
            ]
        }
    },
    "proxy-log.xml": {
        "_declaration": {
            "_attributes": {
                "version": "1.0",
                "encoding": "UTF-8"
            }
        },
        "mule": {
            "_attributes": {
                "xmlns:http": "http://www.mulesoft.org/schema/mule/http",
                "xmlns": "http://www.mulesoft.org/schema/mule/core",
                "xmlns:doc": "http://www.mulesoft.org/schema/mule/documentation",
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "xsi:schemaLocation": "http://www.mulesoft.org/schema/mule/core http://www.mulesoft.org/schema/mule/core/current/mule.xsd\r\nhttp://www.mulesoft.org/schema/mule/http http://www.mulesoft.org/schema/mule/http/current/mule-http.xsd"
            },
            "http:request-config": [
                {
                    "_attributes": {
                        "name": "HTTP_Request_configuration",
                        "doc:name": "HTTP Request configuration",
                        "doc:id": "5e327526-6d9e-44c4-b516-56b78fb8011d"
                    },
                    "http:request-connection": {
                        "_attributes": {
                            "host": "localhost",
                            "port": "3002"
                        }
                    }
                },
                {
                    "_attributes": {
                        "name": "HTTP_Request_Log",
                        "doc:name": "HTTP Request configuration",
                        "doc:id": "ec2352f7-a38e-4808-8405-b2417bc2fac6"
                    },
                    "http:request-connection": {
                        "_attributes": {
                            "host": "localhost",
                            "port": "3001"
                        }
                    }
                }
            ],
            "flow": {
                "_attributes": {
                    "name": "proxy-logFlow",
                    "doc:id": "7afba250-6256-4d64-8826-c0766ac675f7"
                },
                "http:listener": {
                    "_attributes": {
                        "doc:name": "Listener",
                        "doc:id": "ee0c2fe0-2961-44b5-85ec-a454f6ee3055",
                        "config-ref": "HTTP_Listener_config",
                        "path": "/logs"
                    }
                },
                "http:request": {
                    "_attributes": {
                        "method": "POST",
                        "doc:name": "Request",
                        "doc:id": "312161c0-4b35-4600-a6f7-ff3b2f0c8a16",
                        "config-ref": "HTTP_Request_Log",
                        "path": "/logs"
                    }
                }
            }
        }
    }
}