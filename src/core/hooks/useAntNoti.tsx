import { notification } from 'antd';
import useTrans from './useTrans';
import {NotificationPlacement} from "antd/lib/notification/interface";


export default function useAntNoti({
    makeTrans = true,
    placement = "topRight"
}: ICong = {
    makeTrans: true,
    placement: "topRight"
}) {

    const { trans } = useTrans();

    const success =
        (msg: any = "success.main",
            _useTrans: boolean = makeTrans,
            _placement: NotificationPlacement = placement
        ) => {
            notification["success"]({
                message: trans("success.title") as any,
                description: _useTrans ? trans(msg) : msg,
                placement: _placement,
            });
        };

    const error =
        (msg: any = "error.main",
            _useTrans: boolean = makeTrans,
            _placement: NotificationPlacement = placement
        ) => {
            notification["error"]({
                message: _useTrans ? trans(msg) : msg,
                description: msg,
                placement: _placement,
            });
        };

    const info = (
        msg: any,
        _useTrans: boolean = makeTrans,
        _placement: NotificationPlacement = placement
    ) => {
        notification["info"]({
            message: trans("info.title") as any,
            description: _useTrans ? trans(msg) : msg,
            placement: _placement,
        });
    }
    return {
        success,
        error,
        info
    }
}

interface ICong {
    makeTrans?: boolean;
    placement?: NotificationPlacement
}
