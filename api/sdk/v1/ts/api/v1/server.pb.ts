/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as ZjutJhApiUserV1alpha1Hello from "../user/v1alpha1/hello.pb"

export class User {
    static Hello(req: ZjutJhApiUserV1alpha1Hello.HelloRequest, initReq?: fm.InitReq): Promise<ZjutJhApiUserV1alpha1Hello.HelloResponse> {
        return fm.fetchReq<ZjutJhApiUserV1alpha1Hello.HelloRequest, ZjutJhApiUserV1alpha1Hello.HelloResponse>(`/api/hello/${req["name"]}?${fm.renderURLSearchParams(req, ["name"])}`, {
            ...initReq,
            method: "GET"
        })
    }
}